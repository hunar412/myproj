agent.teleport_to_player()
agent.set_item(GRASS, 30, 1)
agent.set_slot(1)
agent.set_assist(PLACE_ON_MOVE, True)
for index in range(4):
    agent.move(FORWARD, 5)
    agent.turn(RIGHT_TURN)