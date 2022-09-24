import React from 'react';
import '../App.css';

const Button = () => {
    return (
        <div className='Test'>
            <a className='button-text' href="/" onClick={console.log('I was clicked!')}>
                <div className='tabloid-box'>
                    <div className='top-row'>
                        <p id='caseName'>West Virginia v. EPA</p>
                        <p id='caseDate'>26/20/2020</p>
                        <p id='caseDocket'>20-1530</p>
                    </div>
                    <div className='summary'>
                        <p id='caseSummary'>This one is about west virginia vs epa. This one is about west virginia vs epa. This one is about west virginia vs epa. This one is about west virginia vs epa. This one is about west virginia vs epa.</p>
                    </div>
                    <div className='justicesName'>
                        <div className='name'>
                            <p>
                                <b>Amy Coney Barrett</b>
                            </p>
                        </div>
                        <div className='name'>
                            <p>
                                <b>Alex <br></br>
                                chickn</b>
                            </p>
                        </div><div className='name'>
                            <p>
                                <b>Alex <br></br>
                                chickn</b>
                            </p>
                        </div><div className='name'>
                            <p>
                                <b>Alex <br></br>
                                chickn</b>
                            </p>
                        </div><div className='name'>
                            <p>
                                <b>Alex <br></br>
                                chickn</b>
                            </p>
                        </div><div className='name'>
                            <p>
                                <b>Alex <br></br>
                                chickn</b>
                            </p>
                        </div><div className='name'>
                            <p>
                                <b>Alex <br></br>
                                chickn</b>
                            </p>
                        </div><div className='name'>
                            <p>
                                <b>Alex <br></br>
                                chickn</b>
                            </p>
                        </div><div className='name'>
                            <p>
                                <b>Alex <br></br>
                                chickn</b>
                            </p>
                        </div>
                    </div>
                    <div className='justices'>
                        {true ? <p>&#10004;</p> : <p>&#10006;</p>}
                        {false ? <p>&#10004;</p> : <p>&#10006;</p>}
                        {true ? <p>&#10004;</p> : <p>&#10006;</p>}
                        {true ? <p>&#10004;</p> : <p>&#10006;</p>}
                        {false ? <p>&#10004;</p> : <p>&#10006;</p>}
                        {true ? <p>&#10004;</p> : <p>&#10006;</p>}
                        {true ? <p>&#10004;</p> : <p>&#10006;</p>}
                        {false ? <p>&#10004;</p> : <p>&#10006;</p>}
                        {true ? <p>&#10004;</p> : <p>&#10006;</p>}
                    </div>
                </div>
            </a>
        </div>
    );
}

export default Button;