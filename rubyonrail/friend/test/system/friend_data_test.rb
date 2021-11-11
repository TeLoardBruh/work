require "application_system_test_case"

class FriendDataTest < ApplicationSystemTestCase
  setup do
    @friend_datum = friend_data(:one)
  end

  test "visiting the index" do
    visit friend_data_url
    assert_selector "h1", text: "Friend Data"
  end

  test "creating a Friend datum" do
    visit friend_data_url
    click_on "New Friend Datum"

    fill_in "Email", with: @friend_datum.email
    fill_in "Firtname", with: @friend_datum.firtName
    fill_in "Lastname", with: @friend_datum.lastName
    fill_in "Phone", with: @friend_datum.phone
    click_on "Create Friend datum"

    assert_text "Friend datum was successfully created"
    click_on "Back"
  end

  test "updating a Friend datum" do
    visit friend_data_url
    click_on "Edit", match: :first

    fill_in "Email", with: @friend_datum.email
    fill_in "Firtname", with: @friend_datum.firtName
    fill_in "Lastname", with: @friend_datum.lastName
    fill_in "Phone", with: @friend_datum.phone
    click_on "Update Friend datum"

    assert_text "Friend datum was successfully updated"
    click_on "Back"
  end

  test "destroying a Friend datum" do
    visit friend_data_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Friend datum was successfully destroyed"
  end
end
