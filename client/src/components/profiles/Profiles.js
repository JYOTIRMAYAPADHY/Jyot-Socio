import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../common/spinner";
import ProfileItem from "./ProfileItem";
import { getProfiles } from "../../action/profileAction";

class Profiles extends Component {
  componentDidMount() {
    this.props.getProfiles();
  }

  //profiles changed to profile
  render() {
    const { profile, loading } = this.props.profile;
    let profileItems;

    if (profile === null || loading) {
      profileItems = <Spinner />;
    } else {
      if (profile.length > 0) {
        profileItems = profile.map((profile) => (
          <ProfileItem key={profile._id} profile={profile} />
        ));
      } else {
        profileItems = <h4>No profiles found...</h4>;
      }
    }

    return (
      <div className="profiles">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Developer Profiles</h1>
              <p className="lead text-center">
                Browse and connect with developers
              </p>
              {profileItems}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
