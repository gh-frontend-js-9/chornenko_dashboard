import React, {Component} from "react";
import DataComponentList from './DataComponentList';

interface TypeProps {
    title?: object,
    company?: object,
    cost?: object,
    timeSpent?: object,
    status?: object,
    deadline?: object,
    progress?: object,
    name?: any,
    assigned?: any,
    position?: any

}

interface TypeState {
    Projects?: any
}

export class DataProjectList extends Component <TypeProps, TypeState> {
    constructor(props: any) {
        super(props);
        this.state = {
            Projects: [],
        }
    }

    componentDidMount() {
        let url:string = 'https://geekhub-frontend-js-9.herokuapp.com/api/projects/';
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    Projects: data
                });
                console.log(data);

            })
            .catch((error: any) => {
                console.error('Something went wrong...'+ error);

            });
    }

    render() {
        const containerProject = this.state.Projects.map((containerProject: any) =>
            <DataComponentList
                key={containerProject._id}
                title={containerProject.title}
                company={containerProject.company}
                cost={containerProject.cost}
                deadline={containerProject.deadline}
                timeSpent={containerProject.timeSpent}
                progress={containerProject.progress}
                status={containerProject.status}
                assigned={containerProject.assigned}
            />);
        return (
            <>{containerProject}</>
        )
    }
}