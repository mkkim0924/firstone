import React from 'react';
import { Form, FormControl, InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import './Hero.scss';

const Hero = () => {
  return (
    <div className="homepage-hero">
      <div className="text-container">
        <h1 className="hero-header">Get help. Gain happiness.</h1>
        <div className="hero-separator"></div>
        <div className="hero-body">Just ask.</div>
        <div className="smart-search-root">
          <div className="search-form-padding">
            <div className="search-form">
              <Form>
                <InputGroup>
                  <InputGroup.Text className="inputGroupText" id="basic-addon1">
                    <FaSearch color="gray" />
                  </InputGroup.Text>
                  {/* <InputGroup.Prepend> */}
                  {/* <InputGroup.Text></InputGroup.Text> */}
                  {/* </InputGroup.Prepend> */}
                  <FormControl
                    className="formControl"
                    placeholder="I need help with..."
                  />
                </InputGroup>
              </Form>
              <button className="hero-search-button">Get help today</button>
            </div>
            <div className="task-template-tags">
              <a className="task-template-btn-link btn btn-secondary">
                Mounting
              </a>
              <a className="task-template-btn-link btn btn-secondary">
                TV Mounting
              </a>
              <a className="task-template-btn-link btn btn-secondary">
                Furniture Assembly
              </a>
              <a className="task-template-btn-link btn btn-secondary">
                Home Repairs
              </a>
              <a className="task-template-btn-link btn btn-secondary">
                Help Moving
              </a>
              <a className="task-template-btn-link btn btn-secondary">
                Cleaning
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
