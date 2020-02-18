import React from "react"

export const ListComponent: React.FunctionComponent = () => {
    return (
        <div>
            <div className={'list-component-all'}>
                <a href={'https://github.com/'}>
                    All Projects
                </a>
                <a href={'https://github.com/'}>
                    Workflow
                </a>
            </div>
            <div className={'list-component'}>
                <div>
                    Project title
                </div>

                <div>
                    Value
                </div>
                <div>
                    Deadline
                </div>
                <div>
                    Time spent
                </div>
                <div>
                    Progress
                </div>
                <div>
                    Status
                </div>
                <div>
                    Assigned to
                </div>
            </div>
        </div>
    );
};
