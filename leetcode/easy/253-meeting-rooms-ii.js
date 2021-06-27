// https://leetcode.com/problems/meeting-rooms-ii/

function minMeetingRooms(nums) {
  nums = nums.sort((a, b) => a[0] - b[0]);

  let rooms = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    let [curStart, curEnd] = nums[i];

    // go through every meeting in rooms and check if we can take one of the rooms (curStart >= roomEnd)
    let foundRoomIdx = null;

    for (let j = 0; j < rooms.length; j++) {
      let [roomStart, roomEnd] = rooms[j];

      // if cur meeting begins after a room ends, we can take it
      if (curStart >= roomEnd) {
        foundRoomIdx = j;
        break;
      }
    }

    // if we've found a room to replace, replace it
    if (foundRoomIdx !== null) {
      rooms[foundRoomIdx] = [curStart, curEnd];
      // reset foundRoomIdx
      foundRoomIdx = null;
    } else {
      // otherwise, if we've gone through the whole loop and we haven't found a room to replace,
      // we need to add a new room
      rooms.push([curStart, curEnd]);
    }
  }

  return rooms.length;
}
