import React from 'react'
import Form from '../Forms/Form'
import MentalHealth from '../../media/Mental-Health-Workshop.pptx'
import HIV from '../../media/HIV-Workshop.pptx'
import FirstAId from '../../media/First-Aid-Workshop.pptx'

const WorkShops = () => {
    return (
    <div className="form-downloads">
      <Form link={FirstAId}  header="First Aid WorkShop" body="Content: Explains what mental health is, the mental health continuum and more."/>
      <Form link={HIV}  header="HIV WorkShop" body="Content: Explains what HIV is, what causes it, how it is diagnosed and more."/>
      <Form link={MentalHealth}  header="Mental Health WorkShop" body="Content: Primary survey, recovery position & aeassessment, adult CPR, alternative ventilation procedures and more"/>
    </div>
    )
}

export default WorkShops
