require 'test_helper'

class UsersControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get users_index_url
    assert_response :success
  end

  test "should get todos" do
    get users_todos_url
    assert_response :success
  end

  test "should get projects" do
    get users_projects_url
    assert_response :success
  end

end
