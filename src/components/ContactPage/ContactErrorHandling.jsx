import React, { Component } from "react";
import ContactPage from "./ContactPage";

export default class ContactErrorHandling extends Component {
  state = { hasError: false };

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.log(error);
  }

  render() {
    if (this.state.hasError) {
      window.location.reload();
    }
    return <ContactPage />;
  }
}
