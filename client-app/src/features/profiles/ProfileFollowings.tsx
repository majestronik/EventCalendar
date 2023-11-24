import { observer } from "mobx-react-lite";
import { useStore } from "../../app/stores/store";
import { Tab, Grid, Header, Card } from "semantic-ui-react";
import ProfileCard from "./ProfileCard";


export default observer(function ProfileFollowings() {
    const { profileStore } = useStore()
    const { profile, followings, loadingFollowings } = profileStore;


    return (
        <Tab.Pane loading={loadingFollowings}>
            <Grid>
                <Grid.Column width={16}>
                    <Header floated="left" icon='user' content={`${profile?.displayName}'s followers`} />
                </Grid.Column>
                <Grid.Column width={16}>
                    <Card.Group itemsPerRow={4}>
                        {followings.map(profile => (
                            <ProfileCard key={profile.username} profile={profile} />
                        ))}

                    </Card.Group>
                </Grid.Column>
            </Grid>
        </Tab.Pane>
    )
})