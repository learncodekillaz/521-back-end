class AddUserColumns < ActiveRecord::Migration[5.2]
  def change
    add_column  :users, :username, :string
    add_column  :users, :first_name, :string
    add_column  :users, :last_name, :string
    add_column  :users, :nickname, :string
    add_column  :users, :gender, :string
    add_column  :users, :phone, :string
    add_column  :users, :address_1, :string
    add_column  :users, :address_2, :string
    add_column  :users, :city, :string
    add_column  :users, :state, :string
    add_column  :users, :country, :string
    add_column  :users, :zipcode, :string
    add_column  :users, :birthday, :date
  end
end
