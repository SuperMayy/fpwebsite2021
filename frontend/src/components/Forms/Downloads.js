import React from 'react'
import Form from './Form'
import Collab from '../../media/Collaborative-Working.docx'
import Fundraise from '../../media/Fundraising-Registration-Form.docx'
import Volunteer from '../../media/Volunteer-Application-Form.docx'

const Downloads = () => {
    return (   
    <div className="form-downloads">
      <Form link={Collab}  header="Collaborate" body="We welcome businesses to work with us, in saving lives."/>
      <Form link={Fundraise}  header="Fundraise" body="Let us know about your ideas and we'll see how we can support you in your fundraising effort."/>
      <Form link={Volunteer}  header="Volunteer" body="A good team is needed to make accomplish any mission, join our and help us make a diffrence"/>
    </div>
    )
}

export default Downloads
