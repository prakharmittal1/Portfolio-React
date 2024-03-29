import React, { Component } from "react"
import Article from "../elements/Article"

class Articles extends Component{

    constructor(props){
        super()
        this.state = {articles:[]}
    }

    componentDidMount(){

        const devTo = ""

        fetch(devTo)
            .then(response => {
                return response.json()
            })
            .then(data => {
                let articles = []
                data = data.slice(0,4)
                data.forEach((element, index) => {
                    articles.push(
                        <div className="column" key={index}>
                            <Article
                                key={index}
                                title={element.title}
                                url={element.url}
                                image={element.cover_image}
                                extract={element.description}
                            />
                        </div>
                    )
                });
                this.setState({articles: articles})
            })

    }

    render(){
        return (
            <section className="section" id="articles">
                <div className="container">
                    <h1 className="title">Articles</h1>
                    <h2 className="subtitle is-4">My latest articles...</h2>
                    <div className="columns">
                        {this.state.articles}
                    </div>
                </div>
            </section>
        )
    }
}

export default Articles
