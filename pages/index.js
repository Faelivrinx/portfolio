import React, { Component } from 'react';

import Header from '../components/shared/Header';
import  BaseLayout  from "../components/layouts/BaseLayout";
class Index extends Component {
    render() {
        return (
            <BaseLayout>
                <h1>I'm index page</h1>  
            </BaseLayout>
        );
    }
}

export default Index;