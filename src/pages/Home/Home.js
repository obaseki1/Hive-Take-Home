import React from 'react';
import Step from '../Step/Step';
import appstore from '../../assets/appstore.png';
import googleplay from '../../assets/googlePlay.png';
import hero from '../../assets/micro.svg';
import step1 from '../../assets/step1.svg';
import step2 from '../../assets/step2.svg';
import step3 from '../../assets/step3.svg';
import step4 from '../../assets/step4.svg';
import step5 from '../../assets/step5.svg';
import step6 from '../../assets/step6.svg';
import step7 from '../../assets/step7.svg';
import step8 from '../../assets/step8.svg';
import globe from '../../assets/globe.png';
import argentina from '../../assets/argentina.jpeg';
import india from '../../assets/india.jpeg';
import mexico from '../../assets/mexico.jpeg';
import pakistan from '../../assets/pakistan.jpeg';
import venezuela from '../../assets/venezuela.jpeg';
import philippines from '../../assets/philippines.jpeg';

import './Home.css';
function Home() {
  return (
    <div>
      <section className="micro-section-1">
        <div className="container">
          <div className="micro-hero">
            <h2>simple tasks, real money</h2>
            <span className="hero-caption">
              Make extra money through small jobs you can do{' '}
              <span className="slight-bold"> anywhere, anytime, </span>
              and from <span className="slight-bold">any device</span>
            </span>
            <button className="micro"> start earning now</button>
            <div className="btn-div">
              <a href="">
                {' '}
                <img src={appstore} />{' '}
              </a>
              <a href="">
                {' '}
                <img src={googleplay} style={{ marginLeft: 10 }} />{' '}
              </a>
            </div>
            <img src={hero} className="micro-hero-img" />
          </div>
        </div>
      </section>
      <section className="micro-section-2">
        <div className="step-container">
          <div className="step-heading">
            <h2>how it works</h2>
            <span>
              Four easy steps to get paid. All you need is an internet connected
              device to get started.
            </span>
          </div>
          <div className="step-div">
            <Step
              pic={step1}
              title={'1. sign up'}
              caption="Register directly or with your Facebook profile"
            />
            <Step
              pic={step2}
              title={'2. APPLY FOR JOBS'}
              caption="Jobs are diverse and readily available"
            />
            <Step
              pic={step3}
              title={'3. COMPLETE TASKS'}
              caption="Work on tasks in the jobs you’ve unlocked"
            />
            <Step
              pic={step4}
              title={'4. GET PAID'}
              caption="Weekly payment via PayPal or Bitcoin"
            />
          </div>
          <div className="task-div">
            <div className="task-div-inner">
              <span className="task-heading">Tasks</span>
              <span className="task-caption">
                Each qualifier exam unlocks new tasks for you to do. Examples
                are:
              </span>
              <div className="task-list">
                <div className="task-list-item">
                  &#10003; <span>Draw a box around an object</span>
                </div>
                <div className="task-list-item">
                  &#10003; <span>Categorize the scene in an image</span>
                </div>
                <div className="task-list-item">
                  &#10003; <span>Transcribe audio to text</span>
                </div>
                <div className="task-list-item">
                  &#10003;{' '}
                  <span>Track the same object across frames in a video</span>
                </div>
              </div>
            </div>
            <div className="task-div-inner">
              <span className="task-heading">Who gives the tasks?</span>
              <span className="task-caption">
                A variety of teams from{' '}
                <b>small startups, universities, and larger companies </b>come
                to us to solve big problems like
                <b> banning hate speech, making videos searchable </b>or{' '}
                <b>building autonomous vehicles.</b>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="micro-section-3">
        <div className="step-container">
          <div className="step-heading">
            <h2>Many Types of Jobs</h2>
          </div>

          <div className="step-div">
            <Step
              pic={step5}
              title={'1. sign up'}
              caption="Register directly or with your Facebook profile"
            />
            <Step
              pic={step6}
              title={'1. sign up'}
              caption="Register directly or with your Facebook profile"
            />
            <Step
              pic={step7}
              title={'1. sign up'}
              caption="Register directly or with your Facebook profile"
            />
            <Step
              pic={step8}
              title={'1. sign up'}
              caption="Register directly or with your Facebook profile"
            />
          </div>
        </div>
      </section>
      <section className="micro-section-4">
        <div className="step-container">
          <div className="step-heading">
            <h2>A Community</h2>
            <span>
              Join a vibrant community of moderators who are using Hive Micro to
              improve their lives.
            </span>
          </div>
          <div className="community-row">
            <div className="community-container">
              <span className="box-title">1.5M+</span>
              <span className="box-caption">Users</span>
            </div>
            <div className="community-container">
              <span className="box-title">200+</span>
              <span className="box-caption">Countries</span>
            </div>

            <div className="community-container">
              <span className="box-title">$2M+</span>
              <span className="box-caption">earned</span>
            </div>
          </div>
        </div>
      </section>
      <section className="micro-section-3">
        <div className="step-container">
          <h2>Testimonials</h2>
          <img src={globe} style={{ width: '100%' }} />
          <div className="testimonial-row">
            <div className="testimonial">
              <div className="country-div">
                <img src={argentina} />
                <span className="testimonial-country">Argentina</span>
              </div>

              <span className="testimonial-name">Veronica Rodriguez</span>
              <span className="testimonial-caption">
                My free time is limited as a mother of two small kids. Your site
                gives me the flexibility to work when the kids are sleeping and
                pay me well when I do. I love knowing that I'm helping to
                support my family.
              </span>
            </div>
            <div className="testimonial">
              <div className="country-div">
                <img src={india} />
                <span className="testimonial-country">India</span>
              </div>

              <span className="testimonial-name">Amol Suryavanshi</span>
              <span className="testimonial-caption">
                It's genuine app.....I have received my first International
                payment through this app.
              </span>
            </div>
            <div className="testimonial">
              <div className="country-div">
                <img src={mexico} />
                <span className="testimonial-country">Mexico</span>
              </div>

              <span className="testimonial-name">John Alonzo</span>
              <span className="testimonial-caption">
                Hive Micro is a great app for those who need to make some extra
                income on the side.
              </span>
            </div>
            <div className="testimonial">
              <div className="country-div">
                <img src={philippines} />
                <span className="testimonial-country">Philippines</span>
              </div>

              <span className="testimonial-name">Melvin Reyes</span>
              <span className="testimonial-caption">
                I started just to pay for some hobbies on the side, but I soon
                found that I'm able to earn a steady source of income.
              </span>
            </div>
            <div className="testimonial">
              <div className="country-div">
                <img src={pakistan} />
                <span className="testimonial-country">Pakistan</span>
              </div>

              <span className="testimonial-name">Bhakti Naringrekar</span>
              <span className="testimonial-caption">
                Easy to use. Legit paying website. I always get response from
                support team. Thank you very much :)
              </span>
            </div>
            <div className="testimonial">
              <div className="country-div">
                <img src={venezuela} />
                <span className="testimonial-country">Venezuela</span>
              </div>

              <span className="testimonial-name">Jasmine Santos</span>
              <span className="testimonial-caption">
                I have been working for the past 9 months, and I've watched the
                platform get better and better.
              </span>
            </div>
            <div className="testimonial">
              <div className="country-div">
                <img src={india} />
                <span className="testimonial-country">India</span>
              </div>

              <span className="testimonial-name">Aditya Venkatesh</span>
              <span className="testimonial-caption">
                With normal work hard to come by in my country, I know that I
                can always find jobs that will put food on the table. And they
                pay in U.S. dollars too!
              </span>
            </div>
          </div>
          <div className="pagination-div"></div>
        </div>
      </section>
    </div>
  );
}

export default Home;
