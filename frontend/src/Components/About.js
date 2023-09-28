import React from 'react'
import './About.css'

function About() {
    return (
        <div className='about-box'>
            <h2 className="about-title"><b>ABOUT CBN</b></h2>
            <div className="about-data">
                <div className="about-img">
                    <img src="https://images.unsplash.com/photo-1583468982228-19f19164aee2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=913&q=80" alt="" />
                </div>
                <div className="about-txt">
                    <p>
                        The "Campus Book Nest" is an innovative web application designed to facilitate seamless 
                        lending and borrowing of books among students within a single college campus. Built using the 
                        MERN (MongoDB, Express.js, React.js, and Node.js) Stack web development technologies, 
                        the platform offers a secure and user-friendly experience accessible through personalized login credentials for each student. 
                        The primary objective of the application is to foster a culture of 
                        sharing and exchange of books, promoting intellectual growth, and encouraging good conduct 
                        within the student community.<br/>
                        <br/>
                        Furthermore, the application captures valuable data on lending and borrowing activities,
                        allowing administrators and college authorities to assess the level of engagement and interest in
                        the book-sharing initiative. Such insights can be used to incentivize and reward active
                        participants, contributing to a thriving and dynamic book-sharing ecosystem on the college
                        campus. By promoting intellectual exchange, cultivating a love for reading, and nurturing a
                        culture of sharing, the "Campus Book Nest" web application aims to enrich the educational
                        experience of students, making it an indispensable tool for the academic community.<br/>
                        <br/>
                        <br/>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
