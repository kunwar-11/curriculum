import React, { useState } from "react";
import PlacesAutocomplete from "react-places-autocomplete";

const LocationInput = ({ eventDetails, setEventDetails }) => {
  const handleChange = (location) => {
    setEventDetails((prev) => ({ ...prev, eventLocation: location }));
  };

  return (
    <PlacesAutocomplete
      value={eventDetails.eventLocation}
      onChange={handleChange}
    >
      {({ getInputProps, getSuggestionItemProps, suggestions, loading }) => (
        <div className="relative">
          <input
            className="bg-gray-100 p-4 rounded border-grayBorder border-2 w-full"
            {...getInputProps({ placeholder: "Paste location here" })}
          />
          <div className="absolute w-full h-48 overflow-x-auto">
            {loading && <div>Loading...</div>}
            {suggestions.map((suggestion) => {
              const className = suggestion.active
                ? "suggestion-item--active"
                : "suggestion-item";

              const style = suggestion.active
                ? { backgroundColor: "#fafafa", cursor: "pointer" }
                : { backgroundColor: "#ffffff", cursor: "pointer" };
              return (
                <div
                  {...getSuggestionItemProps(suggestion, { className, style })}
                  className="py-4 px-2"
                >
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
};

export default LocationInput;
