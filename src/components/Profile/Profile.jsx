import PropTypes from 'prop-types';
import { UserProfile, Description, Avatar, Name, Tag, Location, Stats, Item, Label, Quantity} from './Profile.styled';

export const Profile = ( { username, tag, location, avatar, stats: { followers, views, likes } } ) => {
    return <UserProfile>
        <Description>
            <Avatar src={avatar} alt={username} width= "150" />
            <Name>{username}</Name>
            <Tag>{tag}</Tag>
            <Location>{location}</Location>
        </Description>
        <Stats>
            <Item>
                <Label>followers</Label>
                <Quantity>{followers }</Quantity>
            </Item> 
            <Item>
                <Label>views</Label>
                <Quantity>{views }</Quantity>
            </Item>
            <Item>
                <Label>likes</Label>
                <Quantity>{likes }</Quantity>
            </Item>
        </Stats>
    </UserProfile>;
};

Profile.propTypes = {
    
        "username": PropTypes.string.isRequired,
        "tag": PropTypes.string.isRequired,
        "location": PropTypes.string.isRequired,
        "avatar": PropTypes.string.isRequired,
        "stats": PropTypes.objectOf(PropTypes.number.isRequired)
    };
