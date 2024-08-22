// src/PhaserGame.js
import Phaser from 'phaser';
import React, { useEffect, useRef } from 'react';

const PhaserGame = ({ direction }) => {
  const phaserRef = useRef(null);

  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: 400,
      height: 400,
      backgroundColor: '#000000', // Set the background color to black
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 0 },
          debug: false,
        },
      },
      scene: {
        preload,
        create,
        update,
      },
    };

    let ball;
    let speed = 200;

    const game = new Phaser.Game(config);

    function preload() {
      this.load.image('ball', 'assets/ball1.png'); // Ensure this is the correct path to your ball image
    }

    function create() {
      ball = this.physics.add.image(200, 200, 'ball'); // Center the ball
      ball.setDisplaySize(50, 50); // Make the ball smaller
      ball.setCollideWorldBounds(true);
      ball.setBounce(1);
      ball.setVelocity(0, 0); // Ball is stable initially
    }

    function update() {
      if (!ball) return;

      switch (direction) {
        case 'up-left':
          ball.setVelocity(-speed, -speed);
          break;
        case 'up-right':
          ball.setVelocity(speed, -speed);
          break;
        case 'down-left':
          ball.setVelocity(-speed, speed);
          break;
        case 'down-right':
          ball.setVelocity(speed, speed);
          break;
        case 'left-up':
          ball.setVelocity(-speed, -50);
          break;
        case 'left-down':
          ball.setVelocity(-speed, 50);
          break;
        case 'right-up':
          ball.setVelocity(speed, -50);
          break;
        case 'right-down':
          ball.setVelocity(speed, 50);
          break;
        case 'up':
          ball.setVelocity(0, -speed);
          break;
        case 'down':
          ball.setVelocity(0, speed);
          break;
        default:
          ball.setVelocity(0, 0); // Keep the ball stable if no direction is selected
          break;
      }
    }

    phaserRef.current.appendChild(game.canvas);

    return () => {
      game.destroy(true);
    };
  }, [direction]);

  return <div ref={phaserRef}></div>;
};

export default PhaserGame;
