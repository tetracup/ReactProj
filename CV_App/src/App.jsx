
import './App.css'
import InputField from './InputField.jsx'
import Section from './Section.jsx'
import Container from './Container.jsx'
function App() {

  return (
    <>
      <Container>
        <Section title = "Personal Information">
          <InputField text = "Name" />
          <InputField text = "Email"/>
          <InputField text = "Phone Number"/>
        </Section>
        <Section title = "Education">
          <InputField text = "Title of Study" />
          <InputField text = "School Name"/>
          <InputField text = "Start/End Date"/>
        </Section>
        <Section title = "Work Experience">
          <InputField text = "Position Title" />
          <InputField text = "Company Name"/>
          <InputField text = "Achievements / Responsibilities"/>
          <InputField text = "Start/End Date"/>
        </Section>
      </Container>
    </>
  )
}

export default App
