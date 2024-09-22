import React from 'react'
import { LoginPage } from './LoginPage'
import { SignUp } from './SignUp'
import { StudentInfo } from './StudentInfo'
import { StudentHomePage } from './StudentHomePage'
import { DeanPlacementDashboard } from './DeanPlacementDashboard'
import { CreateNewDrive } from './CreateNewDrive'
import { TandPCoordinatorsDashboard } from './TandPCoordinatorsDashboard'

export const App = () => {
  return (
    <div>
      <LoginPage /> 
      <p></p>
      <SignUp />
      <p></p>
      <StudentInfo />
      <p></p>
      <StudentHomePage />
      <p></p>
      <DeanPlacementDashboard />
      <p></p>
      <CreateNewDrive />
      <p></p>
      <TandPCoordinatorsDashboard />
      <p></p>
    </div>
  )
}
