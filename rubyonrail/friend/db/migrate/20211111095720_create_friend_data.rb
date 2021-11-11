class CreateFriendData < ActiveRecord::Migration[6.1]
  def change
    create_table :friend_data do |t|
      t.string :firtName
      t.string :lastName
      t.string :email
      t.string :phone

      t.timestamps
    end
  end
end
