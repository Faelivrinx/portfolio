import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import {withRouter} from 'next/router';
import axios from 'axios';

class Portfolio extends Component {

    static async getInitialProps({query}) {
        const postId = query.id;
        let portfolio = {};
        try {
            const result = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
            portfolio = result.data;
        } catch (err) {
            console.log(err);
        }  
        return {portfolio: portfolio};
    }

    render() { 
        const portfolio = this.props.portfolio;


        return ( 
            <BaseLayout className="cover">
                <h1>{portfolio.title}</h1>
                <p>{portfolio.body}</p>
                <p>{portfolio.id}</p>
            </BaseLayout>
         );
    }
}
 
export default withRouter(Portfolio);