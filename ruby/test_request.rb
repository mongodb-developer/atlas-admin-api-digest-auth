require 'minitest/autorun'

class RequestTest < Minitest::Test
  def test_request
    out, err = capture_io do
      require_relative './request'
    end

    sleep(2)
    
    assert_includes out, 'MongoDB Atlas'
    assert_includes out, ENV['ATLAS_USER']
  end
end
