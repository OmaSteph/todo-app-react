const BuggyComponent = () => {
  throw new Error('Test error for ErrorBoundary!')
}

export default BuggyComponent
