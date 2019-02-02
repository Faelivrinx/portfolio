import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

class About extends Component {
    render() {
        return (
            <BaseLayout className="cover">
                <BasePage>
                    <h1> About </h1>
                </BasePage>
            </BaseLayout>
        );
    }
}

export default About;