import './App.css'

import InputField from './InputField.jsx'
import MultipleInputField from './MultipleInputField.jsx'
import Section from './Section.jsx'
import Button from './Button.jsx'

function MainForm({formInputs, stateChangeBtns}){
    return(
        <div id = "blue">
        <Section title = "Personal Information">
          <InputField text = "Name" formInputs = {formInputs} fID = "person.name" />
          <InputField text = "Email" formInputs = {formInputs} fID = "person.email"/>
          <InputField text = "Phone Number" _type = "number" formInputs = {formInputs} fID = "person.num"/>
        </Section>
        <Section title = "Education">
          <InputField text = "Title of Study" formInputs = {formInputs} fID = "education.study"/>
          <InputField text = "School Name" formInputs = {formInputs} fID = "education.name"/>
          <InputField text = "Start Date" _type = "date" formInputs = {formInputs} fID = "education.startDate"/>
          <InputField text = "End Date" _type = "date" formInputs = {formInputs} fID = "education.endDate"/>
        </Section>
        <Section title = "Work Experience" >
          <InputField text = "Position Title" formInputs = {formInputs} fID = "work.position"/>
          <InputField text = "Company Name" formInputs = {formInputs} fID = "work.company"/>
          <MultipleInputField text = "Achievements / Responsibilities" formInputs = {formInputs} fID = "work.points"/> 
          <InputField text = "Start Date" _type = "date" formInputs = {formInputs} fID = "work.startDate"/>
          <InputField text = "End Date" _type = "date" formInputs = {formInputs} fID = "work.endDate"/>
        </Section>
        <Section add = "btnCenter">
          <Button text = "Submit" clickFunc = {stateChangeBtns}/>
        </Section>
        </div>
    )
}

export default MainForm 