import { List, Image } from "semantic-ui-react";
import { Profile } from "../../../app/models/profile";
import { Link } from "react-router-dom";

interface Props {
    attendees: Profile[]
}

export default function ActivityListItemAttendee({ attendees }: Props) {

    return (
        <List horizontal>
            {attendees.map(attendee => (
                <List.Item key={attendee.username} as={Link} to={`/profiles/${attendee.username}`} >
                    <Image size="mini" circular src={attendee.image || `/assets/user.png`}></Image>
                </List.Item>

            ))}
        </List>
    )
}