class AddUserIdToFriendData < ActiveRecord::Migration[6.1]
  def change
    add_column :friend_data, :user_id, :integer
    add_index :friend_data, :user_id
  end
end
