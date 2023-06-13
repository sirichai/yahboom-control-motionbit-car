radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        motionbit.runMotor(MotionBitMotorChannel.M2, MotionBitMotorDirection.Forward, 222)
        motionbit.runMotor(MotionBitMotorChannel.M4, MotionBitMotorDirection.Forward, 255)
    } else if (receivedNumber == 2) {
        motionbit.runMotor(MotionBitMotorChannel.M2, MotionBitMotorDirection.Backward, 100)
        motionbit.runMotor(MotionBitMotorChannel.M4, MotionBitMotorDirection.Backward, 255)
    } else if (receivedNumber == 3) {
        motionbit.runMotor(MotionBitMotorChannel.M2, MotionBitMotorDirection.Forward, 255)
        motionbit.runMotor(MotionBitMotorChannel.M4, MotionBitMotorDirection.Forward, 100)
    } else if (receivedNumber == 4) {
        motionbit.runMotor(MotionBitMotorChannel.M2, MotionBitMotorDirection.Forward, 100)
        motionbit.runMotor(MotionBitMotorChannel.M4, MotionBitMotorDirection.Forward, 255)
    } else {
        motionbit.brakeMotor(MotionBitMotorChannel.All)
    }
})
basic.showLeds(`
    # # # # #
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
radio.setGroup(54)
