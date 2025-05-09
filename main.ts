agent.teleportToPlayer()
agent.setItem(GRASS, 30, 1)
agent.setSlot(1)
agent.setAssist(PLACE_ON_MOVE, true)
for (let index = 0; index < 4; index++) {
    agent.move(FORWARD, 5)
    agent.turn(RIGHT_TURN)
}
