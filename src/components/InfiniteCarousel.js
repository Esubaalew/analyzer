import React, { useEffect, useState } from 'react';
import FeatureCard from './FeatureCard';
import '../styles/InfiniteCarousel.css';
import one from '../assets/images/one.png';
import two from '../assets/images/two.png';
import three from '../assets/images/Stacked-Area-Chart.png';
import four from '../assets/images/histogram-chart-example.svg';
import five from '../assets/images/images.png';
import six from '../assets/images/javascript-line-charts-graphs.png';
import seven from '../assets/images/pie-chart-example.svg';
import eight from '../assets/images/pie.png';

const featuresData = [
{ feature: 'Chat Info', description: 'Provides an overview of the chat, including total messages and participants.', imageSrc: one },
{ feature: 'Oldest Message', description: 'Displays the first message sent in the chat.', imageSrc: two },
{feature: 'Latest Message', description: 'Displays the most recent message sent in the chat.', imageSrc: three},
{feature: 'Rank Senders', description: 'Lists the top participants based on the number of messages sent.', imageSrc: four},
{feature: 'Rank Forwarders', description: 'Identifies the users who forward messages most frequently.', imageSrc: five},
{feature: 'Forward Sources', description: 'Reveals the original sources of the most forwarded messages.', imageSrc: six},
{feature: 'Rank Repliers', description: 'Ranks users based on their responsiveness to messages.', imageSrc: seven},
{feature: 'Rank Editors', description: 'Highlights the users who edit their messages the most.', imageSrc: eight},
{feature: 'Common Words', description: 'Analyzes and displays the most frequently used words in the chat.', imageSrc: one},
{feature: 'Active Hours', description: 'Shows the times when the chat is most active.', imageSrc: two},
{feature: 'Active Weekdays', description: 'Indicates which days of the week have the most activity.', imageSrc: three},
{feature: 'Active Months', description: 'Identifies the months with the highest message volume.', imageSrc: four},
{feature: 'Active Years', description: 'Provides insights into the chat’s activity over the years.',   imageSrc: five},
{feature: 'Months All Time', description: 'Offers a historical view of chat activity by month.', imageSrc: six},

    { feature: 'Months By Year', description: 'Breaks down monthly activity for each year.', imageSrc: one}
  ];
  

  const InfiniteCarousel = () => {
    const [current, setCurrent] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrent(current => (current + 1) % featuresData.length);
      }, 4000);
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="carousel-container">
        <FeatureCard
          feature={featuresData[current].feature}
          description={featuresData[current].description}
          imageSrc={featuresData[current].imageSrc}
        />
      </div>
    );
  };
  
  export default InfiniteCarousel;