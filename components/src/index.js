import React from "react"
import ReactDOM from "react-dom"
import faker from "faker"
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App=()=>{
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h3>Warning</h3>
                    Really?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    img={faker.image.avatar()}
                    author="John"
                    time="Today at 6:00PM"
                    text="Awesome stuff"
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    img={faker.image.avatar()}
                    author="Eve"
                    time="Today at 7:30AM"
                    text="I Enjoyed myself"
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    img={faker.image.avatar()}
                    author="Sam"
                    time="Yesterday at 1:00PM"
                    text="Great stuff"
                />
            </ApprovalCard>

        </div>


    )
};

ReactDOM.render(
    <App/>,
    document.querySelector("#root")
)