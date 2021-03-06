
import React, { useState } from 'react'
import { css, styled, setup } from 'goober'
import {useCounter} from './formApp'
import { useBetween } from "use-between";

setup(React.createElement)

const Ol = styled('ol')`
  margin: 0;
  padding-bottom: 2.2rem;
  list-style-type: none;
`
const Li = styled('li')`
  display: inline-block;
  text-align: center;
  line-height: 4.8rem;
  padding: 0 0.7rem;
  cursor: pointer;
  color: silver;
  border-bottom: 2px solid silver;
  &:hover,
  &:before {
    color: #0FA0CE;
  }
  &:after {
    content: "\\00a0\\00a0";
  }   
  span {
    padding: 0 1.5rem;
  }
  &:before {
    position: relative;
    float: left;
    left: 50%;
    width: 1.2em;
    line-height: 1.4em;
    border-radius: 0;
    bottom: -3.99rem;
  }
`
const Todo = css`
  &:before {
    content: "\u039F";
    color: silver;
    background-color: white;
  }
`
const Doing = css`
  &:before {
    content: "\u2022";
    color: white;
    background-color: #33C3F0;  
  }
`
const Done = css`
  &:before {
    content: "\u2713";
    color: white;
    background-color: #33C3F0;
  }
`

const getTopNavStyles = (indx, length) => {
  const styles = []
  for (let i = 0; i < length; i++) {
    if (i < indx) {
      styles.push('done')
    } else if (i === indx) {
      styles.push('doing')
    } else {
      styles.push('todo')
    }
  }
  return styles
}

const getButtonsState = (indx, length) => {
  if (indx > 0 && indx < length - 1) {
    return {
      showPreviousBtn: true,
      showNextBtn: true
    }
  } else if (indx === 0) {
    return {
      showPreviousBtn: false,
      showNextBtn: true
    }
  } else {
    return {
      showPreviousBtn: false,
      showNextBtn: false
    }
  }
}


export default function MultiStep (props) {
    const { activeComponentClassName, inactiveComponentClassName } = props
    const showNav =
      typeof props.showNavigation === 'undefined' ? true : props.showNavigation
  
    const [stylesState, setStyles] = useState(getTopNavStyles(0, props.steps.length))
    const [compState, setComp] = useState(0)
    const [buttonsState, setButtons] = useState(getButtonsState(0, props.steps.length ))
  
    const setStepState = (indx) => {
      setStyles(getTopNavStyles(indx, props.steps.length))
      setComp(indx < props.steps.length ? indx : compState)
      setButtons(getButtonsState(indx, props.steps.length))
    }
    const useSharedCounter = () => useBetween(useCounter);
    const {things,display,setButtonDisabled, buttonDisabled,bag,thing,street, city ,code, phone, date, hour, delivery, setDisplay} = useSharedCounter();


    
    const next = (indx) => {
   const arrResult = [bag,things,thing,street, city ,code, phone, date, hour];
         
           
     for(let i = 0; i > arrResult.length; i++){
      if(i === ""){
        console.log(i)
      }
     
       
     }
     setStepState(compState + 1)  
        
            


            
             
               
              

             
         
          
      
   
    }
    const previous = () => {
      setStepState(compState > 0 ? compState - 1 : compState)
      setButtonDisabled(false)
    } 
  
    const handleOnClick = evt => {
      if (
        evt.currentTarget.value === props.steps.length - 1 &&
        compState === props.steps.length - 1
      ) {
        setStepState(props.steps.length)
      } else {
        setStepState(evt.currentTarget.value)
      }
    }
  
    const renderSteps = () =>
      props.steps.map((s, i) => {
        if (stylesState[i] === 'todo') {
          return (
            <Li
              className={Todo}
              onClick={handleOnClick}
              key={i}
              value={i}
            >
              <span>{i + 1}</span>
            </Li>
          )
        } else if (stylesState[i] === 'doing') {
          return (
            <Li
              className={Doing}
              onClick={handleOnClick}
              key={i}
              value={i}
            >
              <span>{i + 1}</span>
            </Li>
          )
        } else {
          return (
            <Li
              className={Done}
              onClick={handleOnClick}
              key={i}
              value={i}
            >
              <span>{i}</span>
            </Li>
          )
        }
      })
  
    const renderNav = (show) =>
      show && (
        <div className="multi_button">
          <button
            style={buttonsState.showPreviousBtn ? props.prevStyle : { display: 'none' }}
            onClick={previous}
            className="multi_prev"
          >
           Wstecz
          </button>
  
          <button
            className="multi_next"
            disabled={buttonDisabled}
            style={buttonsState.showNextBtn ? props.nextStyle : { display: 'none' }}
            onClick={next}
           
          >
            Dalej
          </button>
        </div>
      )
  
    return (
        <div className="form_app" >
        <div className="forms_app">
    
        {inactiveComponentClassName
          ? props.steps.map((step, index) => {
              const className = index === compState ? activeComponentClassName : inactiveComponentClassName
              return (<div className={className} key={index}>{step.component }</div>)
            })
          : <div>{props.steps[compState].component}</div>}
        <div>{renderNav(showNav)}</div>
      </div>
      </div>
     
    )
  }


