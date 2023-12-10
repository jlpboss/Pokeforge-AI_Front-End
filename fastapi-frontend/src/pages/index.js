import React, { useState, useEffect } from 'react'
import { useGlobalState } from '../context/GlobalState';
import { useRouter } from 'next/navigation';
import authService from '../services/auth.service';
import { jwtDecode } from "jwt-decode";
import styles from '@/styles/global.module.css';
import axios from 'axios';
import Navbar from '@/components/molecule/navbar';
import Link from 'next/link';
import Button from '@/components/atom/button';

export default function Home() {

  function handleGenClick(){

  }

  return (
    <div>
      <Navbar
      className={styles.navbar}
      colapseClass={styles.navcolapsed}
      active={["active","",""]}
      current={["page","",""]}
      />
      <div className={styles.custom}>
        <div className='container'>
          <div className='row justify-content-between'>
            <div className='col text-center'>
              <h1>Welcome!</h1>
            </div>
          </div>
          <div className='row justify-content-between'>
            <div className='col text-center'>
              <p>Are you passionate about competitive Pokémon? I'm tackling the challenge of expanding options within Smogon tiers. By combining my love for the game with artificial intelligence, I've crafted an innovative platform. This tool allows players to swiftly generate strategically balanced Pokémon teams for specific tiers using evolutionary algorithms.</p>
              <p>The goal is simple: provide a user-friendly experience where players can click a button to create competitive teams efficiently. What makes this project unique is its use of genetic algorithms, ensuring each team is both distinctive and optimally performing.</p>
              <p>Join me in revolutionizing competitive Pokémon play, where every team is a product of intelligent design and strategic evolution. Now, let me reintroduce myself and share more about the mind behind this endeavor.</p>
              <p></p>
            </div>
          </div>
          <div className='row justify-content-between'>
            <div className='col text-center'>
              <a href='/generate'>
                <Button 
                text={"Generate!"}
                clickHandler={handleGenClick}
                className={styles.customInput}
                />
              </a>
            </div>
          </div>
          <div className='row justify-content-between'>
            <div className='col text-center'>
              <p></p>
              <h2>Smogon Competitive Tiers:</h2>
              <p>In the realm of competitive Pokémon play, Smogon tiers serve as a system to categorize and organize Pokémon based on their usage and effectiveness in battles. These tiers, such as Uber, OU (OverUsed), UU (UnderUsed), RU (RarelyUsed), and NU (NeverUsed), create a balanced environment where trainers can engage in battles with similarly powerful Pokémon. The OverUsed tier, for example, consists of Pokémon commonly seen in battles due to their strength and versatility. As you move down the tiers, from UU to NU, the usage of Pokémon decreases, allowing for more diverse and unconventional team compositions. This tier system enhances strategic depth and ensures that battles are both challenging and varied, promoting a dynamic competitive landscape.</p>
              <p></p>
              <h2>Genetic Algorithms:</h2>
              <p>Genetic algorithms are a computational approach inspired by the principles of natural selection and evolution. In the context of my innovative Pokémon team-building platform, these algorithms work by simulating the process of genetic evolution to optimize and generate competitive teams. The algorithm begins with an initial population of potential solutions, representing different Pokémon team compositions. Through a series of iterations, the algorithm evaluates the performance of each solution based on predefined criteria, such as battle effectiveness and diversity. The most successful solutions are then "bred" or combined to produce new generations of teams, introducing genetic variation. Over time, the algorithm converges towards optimal solutions, creating strategically balanced teams that exhibit the characteristics of intelligent design and strategic evolution. This computational approach mimics the natural selection process, allowing for the generation of unique and effective Pokémon teams tailored to specific Smogon tiers.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
