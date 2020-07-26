import React, { useContext } from "react";

const ErrorContext = React.createContext(null);

export default class ErrorBoundary extends React.Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    return (
      <ErrorContext.Provider value={this.state.error}>
        {this.props.children}
      </ErrorContext.Provider>
    );
  }
}

export const useErrorContext = () => useContext(ErrorContext);
