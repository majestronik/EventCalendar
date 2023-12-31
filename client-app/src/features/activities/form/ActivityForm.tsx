import { Button, Card, Header, Segment } from "semantic-ui-react";
import { useEffect, useState } from "react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { ActivityFormValues } from "../../../app/models/activity";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { v4 as uuid } from 'uuid';
import { Formik, Form } from "formik";
import * as Yup from 'yup';
import MyTextInput from "../../../app/common/form/MyTextInput";
import MyTextArea from "../../../app/common/form/MyTextArea";
import MySelectInput from "../../../app/common/form/MySelectInput";
import { categoryOptions } from "../../../app/common/options/CategoryOptions";
import MyDateInput from "../../../app/common/form/MyDateInput";

export default observer(function ActivityForm() {

    const { activityStore } = useStore();
    const { createActivity, updateActivity, loadActivity, loadingInitial } = activityStore;

    const { id } = useParams()
    const navigate = useNavigate()

    const [activity, setActivity] = useState<ActivityFormValues>(new ActivityFormValues());

    const validationSchema = Yup.object({
        title: Yup.string().required('The activity title is required'),
        description: Yup.string().required('The activity description is required'),
        category: Yup.string().required('The activity category is required'),
        date: Yup.string().required('The activity date is required').nullable(),
        venue: Yup.string().required('The activity venue is required'),
        city: Yup.string().required('The activity city is required'),


    })

    useEffect(() => {
        if (id) loadActivity(id).then(activity => setActivity(new ActivityFormValues(activity)))
    }, [id, loadActivity])

    function handleFormSubmit(activity: ActivityFormValues) {
        if (!activity.id) {
            let newActivity = {
                ...activity,
                id: uuid()
            }
            createActivity(newActivity).then(() => {
                navigate(`/activities/${newActivity.id}`)
                console.log('activity id : ', newActivity.id);
            })
        } else {
            updateActivity(activity).then(() => navigate(`/activities/${activity.id}`))
        }
    }

    if (loadingInitial) return <LoadingComponent content="Loading Activity...." />
    return (
        <Segment>
            <Header content='Activity Details' sub color="teal" />
            <Card fluid>
                <Card.Content>
                    <Formik
                        validationSchema={validationSchema}
                        enableReinitialize
                        initialValues={activity}
                        onSubmit={value => handleFormSubmit(value)}>
                        {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                            <Form className="ui form" onSubmit={handleSubmit} autoComplete='off'>
                                <MyTextInput placeholder="Title" name="title" ></MyTextInput>
                                <MyTextArea rows={3} placeholder='Description' name="description" />
                                <MySelectInput options={categoryOptions} placeholder='Category' name="category" />
                                <MyDateInput
                                    placeholderText='Date'
                                    name="date"
                                    timeCaption="time"
                                    dateFormat='MMMM d, yyyy h:mm aa'
                                    showTimeSelect
                                />
                                <Header content='Location Details' sub color="teal" />
                                <MyTextInput placeholder='City' name="city" />
                                <MyTextInput placeholder='Venue' name="venue" />
                                <Button
                                    disabled={isSubmitting || !dirty || !isValid}
                                    loading={isSubmitting} floated="right" positive type="submit" content='Submit' />
                                <Button floated="right" as={NavLink} to='/activities' type="button" content='Cancel' />
                            </Form>
                        )}
                    </Formik>

                </Card.Content>
            </Card>
        </Segment>
    )
})