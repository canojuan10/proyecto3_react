export const getAllNewsService = async ({ date, topic }) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/news/?modifiedAt=${date}&topic=${topic}`
  );

  const json = await response.json();
  if (!response.ok) throw new Error(json.message);
  return json.data;
};

export const createUserService = async ({ name, email, password, bio }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/user`, {
    method: "POST",
    body: JSON.stringify({ name, email, password, bio }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.message;
};
export const validateUser = async ({ registrationCode }) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/user/validate/${registrationCode}`
  );

  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.message;
};

export const getNewByIdService = async (idNew) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/news/${idNew}`
  );
  const json = await response.json();

  if (!response.ok) throw new Error(json.message);
  return json.data;
};

// export const getMyUserService = async (token) => {
//   const response = await fetch(`${process.env.REACT_APP_BACKEND}/user/login`);

// };

export const logInUserService = async ({ email, password }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/user/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

export const sendNewService = async ({ data, token }) => {
  const messageObject = {};
  const responseNew = await fetch(`${process.env.REACT_APP_BACKEND}/new`, {
    method: "POST",
    body: data,
    headers: {
      Authorization: token,
    },
  });
  const { message: messageNew, idNew } = await responseNew.json();
  if (!responseNew.ok) {
    throw new Error(messageNew);
  }
  messageObject.messageNew = messageNew;
  if (data.get("photo").size) {
    const responseImage = await fetch(
      `${process.env.REACT_APP_BACKEND}/new/${idNew}/photo`,
      {
        method: "POST",
        body: data,
        headers: {
          Authorization: token,
        },
      }
    );
    const { message: messageImage } = await responseImage.json();
    if (!responseImage.ok) {
      throw new Error(messageImage);
    }
    messageObject.messageImage = messageImage;
  }

  return messageObject;
};

export const editNewService = async ({ data, token, idNew }) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/new/${idNew}`,
    {
      method: "PUT",
      body: data,
      headers: { Authorization: token },
    }
  );
  const json = response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

export const deleteNewService = async ({ id, token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/new/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: token,
    },
  });
  const json = await response.json;

  if (!response.ok) {
    throw new Error(json.message);
  }
};

export const deletePhotoService = async ({ idPhoto, id, token }) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/new/${id}/photos/${idPhoto}`,
    {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    }
  );

  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
};
