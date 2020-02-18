import React, {Component} from "react"
export interface ElementProps {
    title: string
    status: string
    data: []
}
class createProjectElement extends Component <ElementProps> {
    constructor(props:any) {
        super(props);
        this.state = {

        }
    }


    componentDidMount() {
        let url = 'https://geekhub-frontend-js-9.herokuapp.com/api/projects/';
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    allProject: data
                });
            })
            .catch((error: any) => {
                console.error(error);
            });
    }

    render() {
        return(
            <div>
                <h1>Hello</h1>
            </div>
        )
    }
}

