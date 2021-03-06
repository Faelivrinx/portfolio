import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import axios from 'axios';
import {Link} from '../routes';


class Portfolios extends Component {

    static async getInitialProps() {
        let posts = {};
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            posts = response.data;
        } catch (err) {
            console.error(err);
        }
        return { initialData: posts.splice(0, 10) };
    }

    renderPosts(posts) {
        return posts.map(post => {
            return (
                <li key={post.id}>
                    <Link route={`/portfolio/${post.id}`} >
                        <a>{post.title}</a>
                    </Link>
                </li>
            );
        });
    }

    render() {
        const posts = this.props.initialData;
        return (
            <BaseLayout className="cover"> 
                <h1>Portfolio</h1>
                <ul>
                    {this.renderPosts(posts)}
                </ul>
            </BaseLayout>
        );
    }
}

export default Portfolios;