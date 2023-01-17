import React from "react";
import NavBar from "./NavBar";
import QuestionForm from "./QuestionForm";
import BMIForm from "./BMIForm";
import BranchCard from "./BranchCard";
import axios from "axios";
import Branch from "./Branch";
// import Branch from "/home/mahmoud/ad-BTEC-assignment/ad-frontend/src/Models/BranchModel.js"

let URL = process.env.REACT_APP_URL;

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            branchesArray: [],
            prodcutsArray: [],
            productsInBranches: [],
        };
    }

    componentDidMount = () => {
        axios
            .get(`${URL}branches`)
            .then((result) => {
                this.setState({
                    branchesArray: result.data,
                });
            })
            .catch((err) => {
                console.log(err);
            });
        console.log(this.statebranchesArray);
        axios
            .get(`${URL}products`)
            .then((result) => {
                this.setState({
                    prodcutsArray: result.data,
                });
            })
            .catch((err) => {
                console.log(err);
            });
        this.createBranch()
    };


    createBranch() {
        this.state.branchesArray.forEach((branch) => {
            this.state.productsInBranches.append(
                branch = {
                    branchName: branch.name, branchImg: branch.img, products: this.state.prodcutsArray.find((product) => {
                        return branch.name === product.branch_name
                    })
                });
        });
    }

    render() {
        return (
            <>
                <NavBar
                    branchesArray={this.state.branchesArray}
                />
                <BranchCard
                    branchesArray={this.state.branchesArray}
                    prodcutsArray={this.state.productsInBranches}
                />
                <QuestionForm />
                <br />
                <BMIForm />
            </>
        );
    }
};

export default Main;