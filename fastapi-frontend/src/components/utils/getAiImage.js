import axios from "axios";

export default async function getAiImage(pokemon) {
    const apiKey = process.env.API_KEY;
    let maxStat = -1;
    let maxStatName = '';
    let minStat = 1000000;
    let minStatName = '';

    let out;

    for (let stat in pokemon.baseStats) {
        if (pokemon.baseStats[stat] > maxStat) {
            maxStat = pokemon.baseStats[stat];
            maxStatName = stat;
        }
        if (pokemon.baseStats[stat] < minStat) {
            minStat = pokemon.baseStats[stat];
            minStatName = stat;
        }
    }

    const AIprompt = `Make a Pokemon in the sugimori art style named ${pokemon.name} that is a ${pokemon.types[0]} and ${pokemon.types[1]} type with high ${fullStatName(maxStatName)} stat and low ${fullStatName(minStatName)} stat`;

    const postConfig = {
        method: 'post',
        url: 'https://cloud.leonardo.ai/api/rest/v1/generations',
        headers: {
            'accept': 'application/json',
            'authorization': `Bearer ${apiKey}`,
            'content-type': 'application/json',
        },
        data: {
            height: 512,
            modelId: '1e60896f-3c26-4296-8ecc-53e2afecc132',
            prompt: AIprompt,
            width: 512,
            num_images: 1
        },
    };

    try {
        const response = await axios(postConfig);
        const generatedData = response.data;

        const newGenerationId = generatedData.sdGenerationJob.generationId;

        const getConfig = {
            method: 'get',
            url: `https://cloud.leonardo.ai/api/rest/v1/generations/${newGenerationId}`,
            headers: {
                'accept': 'application/json',
                'authorization': `Bearer ${apiKey}`,
            },
        };

        await new Promise((resolve) => setTimeout(resolve, 10000));

        const getImageResponse = await axios(getConfig);
        
        const imageData = getImageResponse.data;
        console.log(imageData);

        return getImageResponse;


    } catch (error) {
        console.error(error);
        return 'Error occurred'; 
    }
}

function fullStatName(stat) {
    switch (stat) {
        case 'hp':
            return 'health';
        case 'atk':
            return 'attack';
        case 'def':
            return 'defence';
        case 'spa':
            return 'special attack';
        case 'spd':
            return 'special defence';
        case 'spe':
            return 'speed';
    }
}
