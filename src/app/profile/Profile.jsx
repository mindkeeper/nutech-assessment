import { useSelector } from "react-redux";
import { useGetProfileQuery } from "../../redux/reducers/profileQuery";
import { Avatar, Form } from "./components";
import { ProfileContainer, ProfileWrapper } from "./components/styled";
import { useCallback, useState } from "react";
export function Profile() {
  const { accessToken } = useSelector((state) => state.auth);
  const { data: profile, isSuccess } = useGetProfileQuery({
    token: accessToken,
  });
  const [editable, setEditable] = useState(false);

  const toggleEditable = useCallback((e) => {
    e.preventDefault();
    setEditable((prev) => !prev);
  }, []);

  return (
    <ProfileContainer>
      <ProfileWrapper>
        {isSuccess && (
          <Avatar
            image={profile?.profile_image}
            first_name={profile?.first_name}
            last_name={profile?.last_name}
            editable={editable}
          />
        )}
        <Form
          user={profile}
          editable={editable}
          toggleEditable={toggleEditable}
        />
      </ProfileWrapper>
    </ProfileContainer>
  );
}
