'use client';

import { useCounter } from '../hooks/useCounter';

export function AnimatedStats() {
  const { count: happyClients, ref: clientsRef } = useCounter(500);
  const { count: projectsDelivered, ref: projectsRef } = useCounter(1000);
  const { count: registeredMembers, ref: membersRef } = useCounter(50);
  const { count: awardWinning, ref: awardsRef } = useCounter(10);

  return (
    <div className="stats">
      <div className="statItem" ref={clientsRef}>
        <h3>{happyClients}+</h3>
        <p>Happy Clients</p>
      </div>
      <div className="statItem" ref={projectsRef}>
        <h3>{projectsDelivered}+</h3>
        <p>Project Delivered</p>
      </div>
      <div className="statItem" ref={membersRef}>
        <h3>{registeredMembers}+</h3>
        <p>Registered Member</p>
      </div>
      <div className="statItem" ref={awardsRef}>
        <h3>{awardWinning}+</h3>
        <p>Award Winning</p>
      </div>
    </div>
  );
}
