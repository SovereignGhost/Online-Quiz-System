import React from "react";
import "../App.css";
import Loader from "../components/Loader";
import NavBar from "../components/NavBar";

function createQuiz() {
  return (
    <div className="wapper">
      <Loader />
      <NavBar />
      <section class="banner inner-page">
        	<div class="banner-img"><img src="images/banner/contact-us.jpg" alt=""/></div>
            <div class="page-title">	
	            <div class="container">
                    <h1>Contact Us</h1>
                </div>
            </div>
        </section>
        <section class="breadcrumb">
        	<div class="container">
            	<ul>
                	<li><a href="#">Home</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
        </section>
        <section class="contact-message">
        	<div class="container">
            	<div class="section-title">
                	<h2>Quiz Settings</h2>
                </div>
                <div class="form-filde">
                    <form action="http://design.dev.drcsystems.ooo:8084/themeforest/academy/html/thank-you.html" method="post">
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="input-box">
                                    <input type="text" placeholder="Quiz #" data-validation="required" name="quiznum"/>
                                </div>
                                <div class="input-box">
                                    <input type="text" placeholder="Time Required" data-validation="required" name="time"/>
                                </div>
                                <div class="input-box">
                                    <input type="date" placeholder="Date" data-validation="required" name="date" />
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="input-box">
                                    <textarea placeholder="Additional Instructions" data-validation="required" name="instr"></textarea>
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <div class="submit-box">
                                    <input type="submit" value="SEND" class="btn"/>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        <section class="contact-detail">
        	<div class="container">
                <div class="section-title">
                    
                    <h2>Questions</h2>
                    <p>Please choose questions from the question pool linked to the class</p>
                </div>
                <div class="contact-boxView">
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="contact-box yello">
                                <div class="icon-box">
                                    <i class="fa fa-list-ul"></i>
                                </div>
                                <h4>MCQ</h4>
                                <a href="#">Choose from Pool</a>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="contact-box green">
                                <div class="icon-box">
                                    <i class="fa fa-pencil"></i>
                                </div>
                                <h4>Short Question</h4>
                                <a href="#">Choose from Pool</a>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="contact-box red">
                                <div class="icon-box">
                                    <i class="fa fa-align-center"></i>
                                </div>
                                <h4>Long Question</h4>
                                <p><a href="#">Choose from Pool</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default createQuiz;