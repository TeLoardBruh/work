require "test_helper"

class FriendDataControllerTest < ActionDispatch::IntegrationTest
  setup do
    @friend_datum = friend_data(:one)
  end

  test "should get index" do
    get friend_data_url
    assert_response :success
  end

  test "should get new" do
    get new_friend_datum_url
    assert_response :success
  end

  test "should create friend_datum" do
    assert_difference('FriendDatum.count') do
      post friend_data_url, params: { friend_datum: { email: @friend_datum.email, firtName: @friend_datum.firtName, lastName: @friend_datum.lastName, phone: @friend_datum.phone } }
    end

    assert_redirected_to friend_datum_url(FriendDatum.last)
  end

  test "should show friend_datum" do
    get friend_datum_url(@friend_datum)
    assert_response :success
  end

  test "should get edit" do
    get edit_friend_datum_url(@friend_datum)
    assert_response :success
  end

  test "should update friend_datum" do
    patch friend_datum_url(@friend_datum), params: { friend_datum: { email: @friend_datum.email, firtName: @friend_datum.firtName, lastName: @friend_datum.lastName, phone: @friend_datum.phone } }
    assert_redirected_to friend_datum_url(@friend_datum)
  end

  test "should destroy friend_datum" do
    assert_difference('FriendDatum.count', -1) do
      delete friend_datum_url(@friend_datum)
    end

    assert_redirected_to friend_data_url
  end
end
