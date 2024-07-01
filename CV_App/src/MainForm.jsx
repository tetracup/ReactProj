import './App.css'

import InputField from './InputField.jsx'
import Section from './Section.jsx'
import Button from './Button.jsx'

function MainForm(props){
    return(
        <div id = "blue">
            <Section title = "Personal Information">
          <InputField text = "Name" />
          <InputField text = "Email"/>
          <InputField text = "Phone Number" _type = "number"/>
        </Section>
        <Section title = "Education">
          <InputField text = "Title of Study" />
          <InputField text = "School Name"/>
          <InputField text = "Start/End Date" _type = "date"/>
        </Section>
        <Section title = "Work Experience">
          <InputField text = "Position Title" />
          <InputField text = "Company Name"/>
          <div>
            <InputField text = "Achievements / Responsibilities"/>
            <Button text = "Add"/>
          </div>
          <InputField text = "Start/End Date" _type = "date"/>
        </Section>
        <Section add = "btnCenter">
          <Button text = "Submit" clickFunc = {props.stateChangeBtns}/>
        </Section>
        </div>
    )
}

export default MainForm 