'use client'
import styles from './dashboard.module.css'

export function ProfileForm({ user }: any) {
  const updateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const body = {
      name: formData.get('name'),
      bio: formData.get('bio'),
      age: formData.get('age'),
      image: formData.get('image'),
    };

    const res = await fetch('/api/user', {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log(body)
    await res.json();
  };

  return (
    <div className={styles.form}>
      <h2>Edit Your Profile</h2>
      <form onSubmit={updateUser}>
        <div>
            <label htmlFor="name">Name</label>
        </div>
        <input type="text" name="name" defaultValue={user?.name ?? ''} />
        <div>
            <label htmlFor="bio">Bio</label>
        </div>
        <textarea
          name="bio"
          cols={30}
          rows={10}
          defaultValue={user?.bio ?? ''}
        ></textarea>
        <div>
            <label htmlFor="age">Age</label>
        </div>
        <input type="text" name="age" defaultValue={user?.age ?? 0} />
        <div>
            <label htmlFor="image">Profile Image URL</label>
        </div>
        <input type="text" name="image" defaultValue={user?.image ?? ''} />

        <button type="submit">Save</button>
      </form>
    </div>
  );
}
