# Nine Men's Morris
## Collaborators (and respective roles)
- Gordon: Game Logic
- Winnie: UI Design

## Game Logic
### Phase 1 (Board Setup)
1. Each player has 9 pieces (also known as, men)
2. Players take turns placing men on the board
3. Aligning 3 men vertically or horizontally forms a mill, allowing them to remove an opponenet's piece. (Opponent's mill cannot be destroyed unless no other choices are available)
4. After all men placed, start Phase 2

### Phase 2 (Move)
1. Players take turns moving men on the board to adjacent points
2. Aligning 3 men vertically or horizontally forms a mill, allowing them to remove an opponenet's piece. (Opponent's mill cannot be destroyed unless no other choices are available)
3. If all pieces are blocked and no adjacent moves can be made, that player instantly loses.
4. When a player only has 3 men left, that player star Phase 3

### Phase 3 (Fly)
1. Only the player with 3 men left are to enter this phase.
2. Players in Phase 3 can now fly men on the board to another other points, removing the limitation of moving to only adjacnet points.