import React, {Component} from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer}
from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
    state={
        services:[
            {
            icon:<FaCocktail/>,
            title:"Free cocktails",
            info:'Lorem ipsum dolar sit amet consectetur adipisicing elit. Magni, corposris!'
            },
            {
            icon:<FaHiking/>,
            title:"Endless Hiking",
            info:'Lorem ipsum dolar sit amet consectetur adipisicing elit. Magni, corposris!'
            },
            {
            icon:<FaShuttleVan/>,
            title:"Free Shuttle",
            info:'Lorem ipsum dolar sit amet consectetur adipisicing elit. Magni, corposris!'
            },
            {
            icon:<FaBeer/>,
            title:"Strongest Beer",
            info:'Lorem ipsum dolar sit amet consectetur adipisicing elit. Magni, corposris!'
            }
        ]
    
    }
    render() {
        return (
            <section className="services">
            <Title title="services" />
            <div className="services-center">
             {this.state.services.map((item,index) => {
                return (<article key={index} className="services">
                <span>{item.icon}</span>  
             <h6>{item.title}</h6> 
             <p>{item.info}</p>
          </article>
          );
         })}
        </div>
        </section>
        );
    }
}