// ----------------------------------------------------------------------

const ROOTS = {
  PROFILE: "/profile",
  FAVOURITE: "/favourite",
  RECENT: "/recent",
  RESERVATION: "/reservation",
};

// ----------------------------------------------------------------------

export const links = {
  // PROFILE
  profile: {
    root: ROOTS.PROFILE,
  },
  // FAVOURITE
  favourite: {
    root: `${ROOTS.FAVOURITE}`,
  },
  // RECENT
  recent: {
    root: `${ROOTS.RECENT}`,
  },
  // RESERVATION
  reservation: {
    root: ROOTS.RESERVATION,
  },
};
