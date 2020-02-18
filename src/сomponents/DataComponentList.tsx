import React from "react"

const DataComponentList = (props: any) => {
    return (
        <div className='project-container' key={props._id}>
            <div className={'project-info-title'}>
                {props.title}
                <p>
                    {props.company}
                </p>
            </div>
            <div className={'project-info-cost'}>
                {props.cost}
            </div>

            <div className={'project-info-deadline'}>
                {props.deadline.slice(0, 10)}
            </div>
            <div className={'project-info-time'}>
                {props.timeSpent}
            </div>
            <div className={'project-info-progress'}>
                <span className={'style-progress-number'}>{props.progress}% </span><progress value={props.progress} max={100}/>
            </div>

            <div className={'project-info-status'}>
                {props.status}
            </div>

            <div>
                <i className={"fas fa-user-circle"}></i>

            </div>
            <div className={'project-info-name'}>
                {props.assigned ? props.assigned.name : "Djon"
                }
                <p className={'project-info'}>
                    {props.assigned ? props.assigned.position : "Frontend Developer"
                    }
                </p>
            </div>
        </div>
    );
}

export default DataComponentList;